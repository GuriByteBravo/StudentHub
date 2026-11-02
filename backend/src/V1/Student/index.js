import schemaValidator from '../helpers/schemaValidator';
import {addStudent} from './student.validator';
// import { getAccessRoles } from '../helpers/commonFunction';
// import Authorization from '../helpers/authorization';
import studentController from './student.controller';


export default class Student {
    constructor(router, db) {
        // this.authorization = new Authorization();
        this.router = router;
        this.db = db;
        this.studentInstance = new studentController()
    }
    async routes() {
        await this.studentInstance.init(this.db)
        // await this.authorization.init(this.db);

        // let userAccess = await getAccessRoles(this.db);

        /** Add  student */
        this.router.post('/student/add', schemaValidator(addStudent), (req, res) => {
            this.studentInstance.addStudent(req, res)
        });
        
    }
}


