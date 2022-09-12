const isTruthy = (value: any) => {
    return value !== undefined
      && value !== 'false'
      && value !== ''
      && value !== 0;
};

const getUrl = (link: string) => process.env.REACT_APP_BACKEND_URL + link;

export { isTruthy, getUrl };