# KNOTERAのGit連携・公開メモ

このフォルダはHTML / CSS / JavaScriptだけで動く静的サイトです。サイトファイルをGitHubのリポジトリに保存し、GitHub Pagesを連携すると閲覧用URLを作成できます。

## 現在の準備状況

- 公開に必要なHTML・CSS・JavaScript・画像を同じフォルダにまとめています。
- `.nojekyll` を追加し、静的ファイルとして配信できる構成にしています。
- `.gitignore` で認証情報や作業用ファイルの誤追加を防ぎます。
- GitHubの保存先リポジトリ・認証は未設定です。公開URLはまだ発行していません。

## GitHub Pagesへ接続する手順

1. 使用するGitHubアカウントと保存先リポジトリを決定します。
2. このサイトのファイルをリポジトリの `main` ブランチに保存します。
3. GitHubのリポジトリ設定 → Pages → Build and deployment で、Sourceを「Deploy from a branch」、Branchを「main」、フォルダを「/(root)」に設定します。
4. 公開処理が完了するとGitHub側で表示されるURLを確認します。
5. Recruit BaseのLP内にある `samples.js` のKNOTERAの `url` を、その公開URLへ変更します。

公開後は同じブランチへ更新を送ることで、同じ閲覧URLへ変更を反映できます。

サイトは架空の企業を想定したデモです。`noindex,nofollow` は引き続き設定しています。

公式ドキュメント：
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
