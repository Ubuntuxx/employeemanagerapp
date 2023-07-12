import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class EmployeeService {
    private apiServeUrl = '';

    constructor(private http: HttpClient) {

    }

    public getEmployees(): Observable<any> {
        return this.http.get<any>(`${this.apiServeUrl}/empleados/todos`);
    }
    public addEmployees(): Observable<any> {
        return this.http.get<any>(`${this.apiServeUrl}/empleados/crear`);
    }
    public updateEmployees(): Observable<any> {
        return this.http.get<any>(`${this.apiServeUrl}/empleados/actualizar`);
    }
    public deleteEmployees(): Observable<any> {
        return this.http.get<any>(`${this.apiServeUrl}/empleados/eliminar`);
    }
}