

const DateAssort = (props: any) => {
  // date1Arr.length = 1일전 커밋한 횟수
  let date1Arr = [];
  // date2Arr.length =  2일전 커밋한 횟수
  let date2Arr = [];

  let today = new Date();
  const date1 = new Date(today.setDate(today.getDate() - 1))
    .toISOString()
    .slice(0, 10);
  today = new Date();
  const date2 = new Date(today.setDate(today.getDate() - 2))
    .toISOString()
    .slice(0, 10);

  const result = [];

  return 1;
};

export default DateAssort;
