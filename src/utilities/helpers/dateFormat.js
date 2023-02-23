// HELPER FUNCTION FOR EXTRACTING YEAR LIKE "2022-23" FROM CURRENT DATE
export const curr_year = (id) => {
  const getElem = document.getElementById(id);

  const today = new Date();
  const startYear =
    today.getMonth() >= 6 ? today.getFullYear() : today.getFullYear() - 1;
  const endYear = startYear + 1;
  const fiscalYear = startYear.toString() + "-" + endYear.toString().substr(2);

  getElem.innerHTML = fiscalYear;
  return;
};