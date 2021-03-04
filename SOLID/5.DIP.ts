/**
 * @DIP The Dependency Inversion Principle
 * Կախվածության օբյեկտը, պետք է լինի աբստրակցիա,այլ ոչ թե ինչ-որ կոնկրետ բան
 */

class HttpRequest {}

/**
 * Ցածր մակարդակ @Low_level
 */
class HttpServer extends HttpRequest {
    request(url: string, type: string){}
}

/**
 * Բարձր մակարդակի @module կախված է ցածր մակարդակի @module -ից
 */
class Http {
    constructor(private httpServer: HttpServer ){};

    get(url: string, options: any){
        this.httpServer.request(url, 'GET')
    }

    post(url: string){
        this.httpServer.request(url, 'POST')
    }
}

/**
 * @DIP
 */

interface IConnection {
    request(url: string, options?: any): any;
}

class Https {
    constructor(private httpsConnection: IConnection){}

    get(url: string) {
        this.httpsConnection.request(url, 'GET');
    }

    post(url: string) {
        this.httpsConnection.request(url, 'POST');
    }
}

class HttpRequestService {
    open(){}
    close(){}
}

class HttpsService implements IConnection {
    req = new HttpRequestService();

    request(url: string, type: string){
        this.req.open();
        this.req.close();
    }
}