declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    electron: {
      db: {
        find: (id: string)=>Promise<any>
        create: (key: string, value: any) => Promise<any>,
        paginate: (key:string, search: Object = {}, option: Object = {}) => Promise<any>
      }
    };
  }
}

export {};