/**
 * Calendar Views Sample
 */
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: '<%=dasherize(selector)%>',
    templateUrl: '<%=dasherize(name)%>.component.html',
    styleUrls: ['<%=dasherize(name)%>.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class <%= classify(name) %>Component {
    public start: string = "Decade";
    public depth: string = "Year";
    onValueChange(args: any):void {
        /*Displays selected date in the label*/
        (<HTMLInputElement>document.getElementById('selectedviews')).textContent = 'Selected Value: ' + args.value.toLocaleDateString();
    }
}