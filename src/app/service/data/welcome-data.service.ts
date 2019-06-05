import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

//to read the message  we got in response from the resource we need to define a class with those objects as variable
// definng what kind of response we are expecting from the service call
export class HelloWorldBean
{
  constructor(public message:string){}
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient

  ) { }

  executeHelloWorldBeanService()
  {
    return this.http.get<HelloWorldBean>("http://localhost:8080/hello-world-bean");
    // console.log("from executeHelloWorldBeanService")
  }


  // http://localhost:8080/hello-world-bean/path-var/priti
  executeHelloWorldBeanServiceWithParameter(name)
  {
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/path-var/${name}`);
    // console.log("from executeHelloWorldBeanService")
  }

}
