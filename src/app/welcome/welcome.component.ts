import { Component, OnInit } from '@angular/core';

// to include appcomponent present in one of the modules, it came with ES6 to get its classes, no need to give .ts after app.component
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

//Decorator with attributes
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

// OnInit is an interface which is implemented in TypesScript
export class WelcomeComponent implements OnInit {

  // message = 'Some Welcome message'
   name=''
  welcomeMessageFromService:string=''

  // to get information from the routing componets we use ACTIVATEDROUTER
  //ActivatedRoute from @angular/router module
  constructor(private route:ActivatedRoute,
    private service:WelcomeDataService) { 
  }
  
  ngOnInit(){
    //console.log(this.message)
    this.name=this.route.snapshot.params['name']
  }

  getWelcomeMessage()
  {
    console.log(this.service.executeHelloWorldBeanService());

    //it just calls the service but the response is not handled, so to check the request & response we have to check in Network tab of browser's inspect element
    // this.service.executeHelloWorldBeanService().subscribe();

    //it returns full json from the called resource
    // this.service.executeHelloWorldBeanService().subscribe(response => this.handleSuccessfulResponse(response));
    
    //it returns mesage object's value from the json
    this.service.executeHelloWorldBeanService().subscribe(response => console.log(response.message));
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
      );

    console.log("last line of get welcome message");  
    
    // console.log("You will get your customised welcome");
  }

  getWelcomeMessageWithParameter()
  {
    
    this.service.executeHelloWorldBeanServiceWithParameter(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
      );
    
  }

  handleSuccessfulResponse(response)
  {
    // console.log(response);
    // console.log(response.message);

    //to send ir to the html page - to get message on html page from resource
    this.welcomeMessageFromService=response.message;
  }


  // to handle the error while calling a REST resource
  handleErrorResponse(error)
  {
    // //response
    // console.log(error);
    // //response.error
    // console.log(error.error);
    // //response.error.message
    // console.log(error.error.message);


    this.welcomeMessageFromService=error.error.message;

  }

}
// export makes the class public, to use the class outside the boundary of the module
export class Class1 {

}
