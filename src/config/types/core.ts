export default interface Core {
  environment: any;
  jwt: {
    secret: string;
  };
  database: {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
  };

  cache: {
    host: string;
    port: number;
    password: string;
  };

  multer: {
    dest: string;
  };
  port: number;
  connection: {
    timeout: number;
    host: string;
  };
  swagger: {
    title: string;
    description: string;
    version: number;
  };
}
