const express = require('express');
const { Address, Employee } = require('../models');
const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const employees = await Employee.findAll(
      {
        include: {
          model: Address,
          as: 'addresses',
        },
      }
    );
    return res.status(200).json(employees);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error'})
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // Eager loading
    // const employee = await Employee.findOne({
    //   where: { id },
    //   include: [{
    //     model: Address,
    //     as: 'addresses',
    //     attributes: { exclude: ['id', 'employee_id'] },
    //   }],
    // });
    // Eager loading

    // Lazy loading
    const employee = await Employee.findOne({ where: { id } });

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    if(req.query.includeAddresses === 'true') {
      const addresses = await Address.findAll({ where: { employeeId: id } });
      return res.status(200).json({ employee, addresses });
    }
    // Lazy loading
    return res.status(200).json(employee);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error'})
  }
});

module.exports = router;