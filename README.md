# TypeScript-Test

* これはTypeScriptのテストプロジェクトです

## 使い方

TypeScriptをインストール

```
$ npm install -g typescript
```

configファイルを作成

```
$ tsc --init 
```

configファイルに、`files`を追記

```
{
  "compilerOptions": {
   ...
  },
  "files": [
    "test.ts"
  ]
}
```

jsファイルへのコンパイル

```
$ tsc -p tsconfig.json
```

jsファイルの実行

```
$ node test.js
```