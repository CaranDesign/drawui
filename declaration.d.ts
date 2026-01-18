// explicits module.css files that otherwise typescript dosen`t recognize  

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}