# Git Flow: A Successful Git branching model

Այն Git-ի ճյուղավորման բազմաթիվ մոդելներից մեկն է, որը մենք կամ մեր թիմը կարող է օգտագործել: Որպիսզի ավելի էֆեկտիվ կազմակերպել
աշխատանքը։ Այս մոտեցումը ստանդարտ չէ և չկա պարտադրող հանգամանք այն օգտագործելու համար։

```
------ Master or Main branch ------ Prodaction, 

------ Develop or Development barnch ------ Development, Satageing

```
## Gitflow-ի հիմնական գաղափարները
- [x] Այս մոդելը հիանալի է release-ի վրա հիմնված աշխատանքային հոսքը կազմակերպելու համար:
- [x] Gitflow-ն առաջարկում է ստեղծել առանձին ճյուղ սխալների շտկման համար:

## Աշխատանքի հաջորդականությունը Gitflow մոդելն օգտագործելիս

- [1] master-ից ստեղծում ենք develop
- [2] develop-ից ստեղծում ենք feature
- [3] Երբ նոր ֆունկցիոնալության մշակումն ավարտված է, այն միավորվում է develop ճյուղի հետ: $git merge develop
- [4] develop-ից ստեղծում ենք release
- [5] Երբ release ճյուղը պատրաստ է, այն միաձուլվում է develop-ի և master-ի հետ:
- [6] Եթե ​​master-ում խնդիր է հայտնաբերվում, ապա դրանից ստեղծվում է hotfix ճյուղ:
- [7] hotfix-ի ճյուղն ավարտվելուց հետո այն միավորվում է develop-ի և master-ի հետ:

```
> git config --global user.email ''
> git config --global user.name ''
> gti config user.name
> gti config user.email

> git clone {project_url}
> git flow init
> git init
> git remote add origin {URL}
> git remote rm {origin}
> git branch {branch_name}
> git branch --list
> git branch -d {branch_name}
> git checkout {branch_name}
> git checkout -b {new_branch_name}
> git status
> git add {change_file}
> git add . 
> git add -A
> git commit -m 'commit_message'
> git push origin {barnch_name}
> git push {barnch_name}
> git pull {remote}
> git log  -- oneline
> git revert {commit_id, for_example=9325884}

> git remote add heroku {URL} --> Add 2 remote src
> git commit --amend -m "new commit"
> git stash
> git reset --hard origin/{ BRANCH_NAME }

> git push https://'user_name':'user_password'@github.com/user_name/project_name.git

> ssh-keygen
> eval "$(ssh-agent -s)"
> ssh-add ~/.ssh/id_rsa/
> cat ~/.ssh/id_rsa.pub

```

## Git commit CI/CD
```
Major Version commit pattern:
    BREAKING CHANGE

Minor Version commit title pattern:
    feat:       or feat(some text|scope here):

Patch Version commit title patterns:
    fix:        or fix(some text|scope here):
    docs:       or docs(some text|scope here):
    style:      or style(some text|scope here):
    refactor:   or refactor(some text|scope here):
    perf:       or perf(some text|scope here):
    test:       or test(some text|scope here):
    chore:      or chore(some text|scope here)

BREAKING CHANGE - A commit that makes backward-incompatible changes
feat            - A commit that makes a new feature. It is backward incompatible then should contain BREAKING CHANGE in commit's header or body
fix             - A bug fix
docs            - Documentation only changes
style           - Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
refactor        - A code change that neither fixes a bug or adds a feature
perf            - A code change that improves performance
test            - Adding missing tests
chore           - Changes to the build process or auxiliary tools and libraries such as documentation generation

example` git commit -m 'fix: mirror commit'

```