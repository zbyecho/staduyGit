# staduyGit
学习git 命令

## Git 

### 定义：分布式版本控制系统

### 创建版本库 repository

```

- git init                      // 初始化版本库
- git add .                     // 提交到本地缓存区 
- git commit -m 'beizhu'        // 提交到分支上

```

### 远程仓库

```
- git remote add origin ...url  // 远程仓库地址
- git push -u origin master     // 第一次提交到远程代码库
- git push origin master        // 提交到远程代码库
- git pull                      // 拉到当前分支
```

## 小结  Git支持多种协议，包括https，但ssh协议速度最快。


### 时光机穿梭

```
- git checkout {分支名字}       // 切换分支
- git merge origin/分支名       // 合并分支

```
