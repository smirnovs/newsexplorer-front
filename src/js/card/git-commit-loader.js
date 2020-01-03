// import { GIT_API } from '../helpers/messages.js';
import { Api } from '../api/api.js';
import { GIT_API } from '../helpers/messages.js';
import { GitCard } from './git-card.js';
import { glide } from '../glider/glide.js';


export class GitCommitLoader {
    constructor() {
        this.getGitCards()
    }
    getGitCards() {
        const api = new Api({
            baseUrl: GIT_API,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        api.getGit()
            .then(res => {
                return Promise.resolve(res.json())
            })
            .then(res => {
                for (let i = 0; i < res.length; i++) {
                    const name = res[i].commit.committer.name;
                    const email = res[i].commit.committer.email;
                    const date = res[i].commit.committer.date;
                    const message = res[i].commit.message;
                    const url = res[i].author.avatar_url;
                    new GitCard(name, email, date, message, url);
                }
            }).then(() => {
                glide.mount();
            }).catch(err => {
                console.log(err);
            })
    }

}

