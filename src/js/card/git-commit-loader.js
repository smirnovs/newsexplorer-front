export class GitCommitLoader {
    constructor(gitapi, createCardCallback, glide) {
        this.gitapi = gitapi;
        this.createCardCallback = createCardCallback;
        this.glide = glide;
    }
    getGitCards() {
        this.gitapi.getGit()
            .then(res => {
                for (let i = 0; i < res.length; i++) {
                    const name = res[i].commit.committer.name;
                    const email = res[i].commit.committer.email;
                    const date = res[i].commit.committer.date;
                    const message = res[i].commit.message;
                    const url = res[i].author.avatar_url;
                    this.createCardCallback(name, email, date, message, url);
                }
            }).then(() => {
                this.glide.mount();
            }).catch(err => {
                console.log(err);
            })
    }

}

