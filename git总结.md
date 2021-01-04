# git基本流程
## 创建新项目
1. 在远程服务器创建一个仓库并创建相应的分支，用于保存本地传到服务器中的数据
2. 在本地创建一个文件夹，在该文件夹内打开git
3. 初始化 `git init`
4. 与远程仓库建立连接 `git remote add origin 远程仓库地址`
5. 将远程仓库中的分支pull到本地 `git pull origin 远程仓库分支名称`
6. 进入到pull到本地的分支 `git checkout 分支名称`
7. 将本地的文件添加到暂存区 `git add .`,如果.gitignore忽略的文件也想添加，`git add . -f`
8. 将本地的文件添加到本地仓库 `git commit -m 提交信息`
9. 将本地仓库发送到远程仓库 `git push origin 分支名` 
## 已有项目
1. 在本地新建文件夹，在该文件夹内，打开git
2. 使用`git init`命令初始化本地仓库
3. 创建分支 `git branch 本地分支名`
4. 切换到该分支`git checkout 本地分支名`
5. 与远程仓库建立联系`git remote add origin 远程仓库地址`
6. 将远程仓库中的分支拉取到本地`git pull origin 远程仓库分支名`
## git辅助命令
1. 查看所有分支 `git branch`
2. 创建分支 `git branch 分支名称`
3. 切换分支 `git checkout 分支名称`
4. 删除分支 `git branch -d 分支名称`进入一个分之后不能删除当前分支，需要推出该分支才能删除
5. 强制合并不相关联的仓库 `git pull origin dev --allow-unrelated-histories
` 如果你在提交时提交的不是从远程仓库pull到本地的而是在本地创建的需要使用该命令
6. 取消与远程的连接 `git remote remove origin`
7. 与远程分支建立关联`git branch -u origin/remote_branch your_branch`
