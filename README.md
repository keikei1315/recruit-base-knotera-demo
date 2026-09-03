# KNOTERA 採用サイト

Recruit Base 営業提案用の1ページ採用サイト。架空のWeb制作・コンサルティング会社「株式会社ノテラ」を想定しています。

## 開き方

公開サイト： https://keikei1315.github.io/recruit-base-knotera-demo/

GitHub： https://github.com/keikei1315/recruit-base-knotera-demo

`index.html` をブラウザで開いて閲覧できます。インストールやビルドは不要です。
このフォルダ全体を静的Webサーバーへ配置しても動作します。外部CDN・API・外部フォントへの接続はありません。

## ファイル構成

- `index.html`：ページ全体、募集要項、FAQ、応募案内
- `style.css`：配色、レイアウト、レスポンシブ対応、アニメーション
- `main.js`：スマホメニュー、スクロール表示、職種リンク、応募ダイアログ、動きの停止
- `assets/photos/`：共通の画像フォルダからコピーした写真
- `assets/generated/team-creative.png`：このサイト向けに画像生成したイラスト
- `assets/favicon.svg`：架空ブランドのアイコン

## デザイン

白・赤・チャコールを基調に、淡い水色をアクセントに使用。参考画像の斜めの人物写真、大きな英字、曲線、親しみのあるイラストを、Web制作会社向けに再構成しています。
構成は、ファーストビュー → メッセージ → 仕事内容 → 働く環境 → 写真 → 人の視点 → 募集職種・要項 → 選考フロー → FAQ → 応募CTA → 会社情報。

## 動作

- 画面幅に応じてPC・タブレット・スマートフォン用の構成へ切り替え。
- ファーストビューの登場演出、スクロールによるコンテンツ表示、写真とボタンのホバー反応。
- 募集職種を押すと詳細が開き、仕事内容からのリンクでは対象職種を自動展開。
- FAQとスマホメニューの開閉。メニューはEscapeで閉じられます。
- 応募案内は営業提案用であることを伝えるダイアログを表示。情報を収集・送信しません。
- フッターの「動きを停止する」で演出を停止可能。端末の「動きを減らす」設定も優先します。

## 公開前の差し替え事項

このデモは検索エンジン向けに `noindex,nofollow` を指定しています。アクセス制限機能ではありません。
企業名、各職種・業務内容、人物のストーリー、働く環境、選考フローは架空のサンプルです。
実際の企業情報、掲載許可のある写真、確認済みの募集条件（給与・勤務地・雇用形態・勤務時間・休日・福利厚生など）、応募先へ差し替えてください。
実在する会社の企業名・ロゴ・個人名・電話番号・メールアドレス・住所は掲載していません。

## 確認結果（2026年9月3日）

- 実ブラウザで1440px・768px・390px幅を確認。各幅でページの横方向のはみ出しなし。
- ファーストビュー、仕事内容、人物セクション、募集要項、FAQ、応募案内を目視確認。
- スマホのメニュー開閉と項目選択、募集職種の開閉、人物カードから該当職種の自動展開、応募案内の開閉、FAQの開閉、動きの停止を操作確認。
- 画像の読み込みエラーなし。ページ内リンクの参照先欠落なし。ブラウザのエラーログなし。JavaScript構文チェック成功。
- スマホで写真が説明文に重なる部分と、PCの装飾線がリンクにかかる部分を修正。
- `prefers-reduced-motion` の分岐はコードで実装・確認済み。OS設定を切り替えての実機確認は行っていません。

## 画像の由来・生成記録

共通フォルダの元画像は変更せず、以下をコピーしています。

| 使用ファイル | コピー元のファイル名 |
|---|---|
| hero.jpeg | AdobeStock_1355894722-1-scaled.jpeg |
| team.jpg | 34558635_m.jpg |
| meeting.jpg | 26123270_m-1.jpg |
| desk.jpg | 33402307_m-1.jpg |
| director.jpg | lst_01.jpg |
| designer.jpg | lst_02.jpg |
| engineer.jpg | 32974339_m-1.jpg |
| collaboration.jpg | 33300219_m-1.jpg |

生成イラストは組み込み画像生成を使用。1536 × 1024px。採用メッセージ横に配置しています。

生成プロンプト：

> An elegant flat editorial illustration of three small anonymous creative professionals collaboratively building an oversized abstract browser window. Include an oversized cursor, small coral blocks, and a flowing connection line. Pure white background, generous whitespace. Friendly geometric cut-paper forms with subtle dimensional shadows. Polished, warm, grown-up Japanese recruitment web illustration, a visual counterpart to people photography. Landscape 3:2 composition, harmonious self-contained group. Palette: crimson #d63346, coral #f27378, blush #fae5e7, pale turquoise #c8e6e8, charcoal. Exactly three anonymous professionals, no actual identities, no words, letters, real logos or watermark. Not childish clipart, not photorealism.
