// import { GIT_API } from '../helpers/messages.js';
import { Api } from '../api/api.js';
import { GIT_API } from '../helpers/messages.js';
import { CreateGitCatds } from './creategitvard.js';
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
                    // console.log(name, email, date, message, url)
                    new CreateGitCatds(name, email, date, message, url);
                }
            }).then(() => {
                glide.mount();
            }).catch(err => {
                console.log(err);
            })
    }
    // createGitCards() {
    //     this.getGitCards();
    // }
}

export const api = new Api({
    baseUrl: GIT_API,
    headers: {
        // authorization: 'aae1e5094f4fd183fddeab7e149111039716590a ',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});