<template>
  <div class="container">
    <p class="name">{{ name + ' last updated his profile ' + this.updated_time  }}</p>
    <p class="message"> {{ message  }}   </p>
  </div>
</template>
<script>

  import axios from 'axios';
  import moment from 'moment';

export default {
  name: 'githubCounter',
  data() {
    return {
      testdata: {
        datetime: '2018-02-14T03:00:30Z',
        reposurl: "https://api.github.com/users/MDCurrent/repos",
        repos: {
          zero: {
            archive_url: "https://api.github.com/repos/MDCurrent/2017-intern-challenge/{archive_format}{/ref}",
            archived: false,
            assignees_url: "https://api.github.com/repos/MDCurrent/2017-intern-challenge/assignees{/user}",
            blobs_url: "https://api.github.com/repos/MDCurrent/2017-intern-challenge/git/blobs{/sha}",
            branches_url: "https://api.github.com/repos/MDCurrent/2017-intern-challenge/branches{/branch}",
            clone_url: "https://github.com/MDCurrent/2017-intern-challenge.git",
            collaborators_url: "https://api.github.com/repos/MDCurrent/2017-intern-challenge/collaborators{/collaborator}",
            comments_url: "https://api.github.com/repos/MDCurrent/2017-intern-challenge/comments{/number}",
            commits_url: "https://api.github.com/repos/MDCurrent/2017-intern-challenge/commits{/sha}",
            compare_url: "https://api.github.com/repos/MDCurrent/2017-intern-challenge/compare/{base}...{head}",
            contents_url: "https://api.github.com/repos/MDCurrent/2017-intern-challenge/contents/{+path}",
            contributors_url: "https://api.github.com/repos/MDCurrent/2017-intern-challenge/contributors",
            created_at: "2017-02-08T05:58:57Z",
            default_branch: "master",
            deployments_url: "https://api.github.com/repos/MDCurrent/2017-intern-challenge/deployments",
            description: null,
            downloads_url: "https://api.github.com/repos/MDCurrent/2017-intern-challenge/downloads",
            events_url: "https://api.github.com/repos/MDCurrent/2017-intern-challenge/events",
            fork: true,
            forks: 0,
            forks_count: 0,
            forks_url: "https://api.github.com/repos/MDCurrent/2017-intern-challenge/forks",
            full_name: "MDCurrent/2017-intern-challenge",
            git_commits_url: "https://api.github.com/repos/MDCurrent/2017-intern-challenge/git/commits{/sha}",
            git_refs_url: "https://api.github.com/repos/MDCurrent/2017-intern-challenge/git/refs{/sha}",
            git_tags_url: "https://api.github.com/repos/MDCurrent/2017-intern-challenge/git/tags{/sha}",
            git_url: "git://github.com/MDCurrent/2017-intern-challenge.git",
            has_downloads: true,
            has_issues: false,
            has_pages: false,
            has_projects: true,
            has_wiki: true
          },
          commits :{ first_commit : {
              author : {
                  login : 'MDCurrent'
              },
              commiter : {
                  login:'MDCurrent',
                date :'2017-02-09T02:31:56Z',
                email : 'currentmatthew@gmail.com'
              }
          }

          }
        }
      },
      account: {
        first_name: 'Matthew',
        id: 'fuckers',
        last_name: 'Current'
      },
      message: null,
      updated_at: null,
      repos_url: null,
      repo_list: null
    }
  },
  watch: {
    repos_url: function (repos_url) {
      if (repos_url !== null) {
        axios.get(this.repos_url).then(response => {
          this.repo_list = this.response
        });
      }
    }
  },
  computed: {

    name () {
      return this.account.first_name + ' ' + this.account.last_name
    },

    updated_time() {
      return moment(this.testdata.datetime).fromNow();
    },
  repo_commits() {
    return this.testdata.repos.zero.commits_url.split('{')[0]
  },
},
  methods : {
    getUser()
    {
      axios.get('https://api.github.com/users/mdcurrent').then(response => {
        this.repos_url = response.data.repos_url;
      });
    },
    getRepos() {
        axios.get(this.testdata.reposurl).then(response => {
            this.repo_list = response.data
        })},
      getRepoCommits() {
            axios.get(this.repo_commits).then(response => {
                console.log(response)
                this.account.id = response.data
            })
      }
    },

  created(){
//      this.getRepoCommits();
    
  }

}

</script>
<style scoped>
  p  {
    font-size:50px;
    position: relative;
    padding: 15px 50px;
    padding-top: 15px;
    padding-right: 50px;
    padding-bottom: 15px;
    padding-left: 50px;
    color: aliceblue;
    font-weight: 900;
    opacity: 1.0;

  }
  .container {
    padding:  all 12px darkgrey;
    display: inline-block;
    background-color: rgba(50, 54, 54, 0.4);
    margin: 5%
  }

</style>
