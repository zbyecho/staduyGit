<!--
 * @Date: 2020-11-17 15:44:00
 * @LastEditors: zhangbaoyan
 * @LastEditTime: 2020-11-17 16:36:06
 * @FilePath: /Code/README.md
-->
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

#### 版本回退

```
- git reset --hard {commit_id}  // 回退到指定commitid
- git reflog                    // 查看命令历史
```


### 分支管理

```
- git branch {name}             // 创建分支
- git checkout {分支名字}       // 切换分支
- git switch -c {name}          // 创建并切换分支 优先使用
- git switch {name}             // 切换分支
- git merge origin/分支名       // 合并分支
- git branch -d {name}          // 删除分支

```
### 标签管理

```
- git tag {name}                        // 创建tag
- git tag                               // 查看tag
- git tag -d {name}                     // 删除tag
- git push origin :refs/tags/<tagname>  // 删除远程tag
- git push origin --tags                // 一次推送本地tag
```

## 自定义git

- 创建 .gitignore 文件

```
    # 排除所有.开头的隐藏文件:
    .*
    # 排除所有.class文件:
    *.class
    # 不排除.gitignore和App.class:
    !.gitignore
    !App.class
```
