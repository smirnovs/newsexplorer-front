export class GitCommitLoader {
    constructor(gitapi, createCardCallback, glide) {
        this.gitapi = gitapi;
        this.createCardCallback = createCardCallback;
        this.glide = glide;
    }
    getGitCards() {
        this.gitapi.getGit()
            .then(res => {
                res.forEach(item => {
                    const name = item.commit.committer.name;
                    const email = item.commit.committer.email;
                    const date = item.commit.committer.date;
                    const message = item.commit.message;
                    const url = item.author.avatar_url;
                    this.createCardCallback(name, email, date, message, url);
                })
            }).then(() => {
                this.glide.mount();
            }).catch(err => {
                console.log(err);
            })
    }

}

