# KNOTERAのGit連携・公開メモ

このフォルダはHTML / CSS / JavaScriptだけで動く静的サイトです。サイトファイルをGitHubのリポジトリに保存し、GitHub Pagesを連携すると閲覧用URLを作成できます。

## 現在の準備状況

- 公開に必要なHTML・CSS・JavaScript・画像を同じフォルダにまとめています。
- `.nojekyll` を追加し、静的ファイルとして配信できる構成にしています。
- `.gitignore` で認証情報や作業用ファイルの誤追加を防ぎます。
- GitHubの保存先： https://github.com/keikei1315/recruit-base-knotera-demo
- GitHub Pagesの公開先： https://keikei1315.github.io/recruit-base-knotera-demo/
- 公開元は `main` ブランチのルートです。

## GitHub Pagesへ接続する手順

1. このフォルダでサイトを編集し、ブラウザで確認します。
2. 変更をGitにコミットして、`origin` の `main` ブランチへpushします。
3. GitHubのActionsで公開処理の完了を確認します。
4. 上記のGitHub Pages URLを開き、更新を確認します。
5. LP側のKNOTERAのリンクは `samples.js` で管理します。

公開後は同じブランチへ更新を送ることで、同じ閲覧URLへ変更を反映できます。

サイトは架空の企業を想定したデモです。`noindex,nofollow` は引き続き設定しています。

公式ドキュメント：
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
