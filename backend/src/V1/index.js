import Student from './Student/index.js';

export default class Routes {
  constructor(router, db) {
    this.router = router;
    this.DatabaseConnect = db;
  }

  async routesRegistration() {
    this.db = await this.DatabaseConnect.getDB();

    // this.auth = new Auth(this.router, this.db);
    // await this.auth.routes();

    this.student = new Student(this.router, this.db);
    await this.student.routes();
  }
}
