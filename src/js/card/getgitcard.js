// import { GIT_API } from '../helpers/messages.js';
import { Api } from '../api/api.js';
import { GIT_API } from '../helpers/messages.js';
import { CreateGitCatds } from './creategitcard.js';
import { glide } from '../glider/glider.js';


export class GetGit {
    constructor() {
        this.getGitCards()
    }
    getGitCards() {
        api.getGit()
            .then(res => {
                return Promise.resolve(res.json())
            })
            .then(res => {
                for (let i = 0; i < res.length; i++) {
                    let name = res[i].commit.committer.name;
                    let email = res[i].commit.committer.email;
                    let date = res[i].commit.committer.date;
                    let message = res[i].commit.message;
                    let url = res[i].author.avatar_url;
                    new CreateGitCatds(name, email, date, message, url);
                }
            }).then(() => {
                glide.mount();
            }).catch(err => {
                console.log(err);
            })
    }

}

export const api = new Api({
    baseUrl: GIT_API,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});