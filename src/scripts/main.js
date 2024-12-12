'use strict';

let employeesList = [...document.querySelectorAll('li')];

const helper = (list) => {
  return list.map((x) => {
    return {
      salary: Number(x.dataset.salary.split(',').join('').slice(1)),
      element: x,
    };
  });
};

employeesList = helper(employeesList);

const sortList = (list) => {
  return list.sort((a, b) => b.salary - a.salary);
};

employeesList = sortList(employeesList);

const parentt = document.querySelector('ul');

parent.innerHTML = '';
employeesList.forEach((empl) => parentt.appendChild(empl.element));

// const getEmployees = (list) => {};
