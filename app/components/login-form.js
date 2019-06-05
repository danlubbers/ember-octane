import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginFormComponent extends Component {
    @tracked
    userId = null;

    get isDisabled() {
        return !this.userId;
    }

    loginAsUserWIthId(val) {
    console.log('UserId: ', val);
    }

    /**
     * 
     * @param {Event & { target: HTMLSelectElement}} evt 
     */

    @action
    onSelectChanged(evt) {
        this.userId = evt.target.value;
    }
    
    /**
     * 
     * @param {Event & {target: HTMLFormElement}} evt 
     */

    @action
    onLoginFormSubmit(evt) {
        const { target } = evt;
        const val = target.querySelector('select').value;
        evt.preventDefault();
        // debugger;
        this.loginAsUserWIthId(val);
    }
}
