import React from 'react'
import './App.css'
import AppIcon from './appIcon_1024.png'

function App() {
  return (
    <div className="h-full md:w-3/5 max-w-3xl min-w-screen_w pt-4 mx-auto pb-8 px-4">
      <img
        src={AppIcon}
        alt="app_icon"
        className="rounded-3xl block mx-auto mb-4 max-w-s_icon_w md:max-w-icon_w"
      />
      <div className="text-2xl font-bold font-hiragino_kaku_3 text-center text-black">
        <p>東京ゴミ箱マップ</p>
        <p className="text-lg text-black font-hiragino_kaku_3 text-center">
          - みんなでシェアしてきれいな街へ -
        </p>
        <p>利用規約</p>
      </div>
      <br />
      <p className="block text-black text-base text-center font-hiragino_kaku_3 mx-auto">
        この利用規約(以下、「本規約」)は、「東京ゴミ箱マップ - みんなでシェアしてきれいな街へ
        -」(以下、本アプリ)と本アプリの利用者(以下、ユーザー)との間の権利義務関係を定めるものです。
        本アプリを利用していただくにあたり、以下の本規約の全文をお読みいただき、同意する必要があります。
      </p>
      <hr />
      <div>
        <div>
          <p className="text-black text-xl font-semibold font-hiragino_kaku_3 mb-4">
            第1条 本アプリ
          </p>
          <p className="text-black text-base font-hiragino_kaku_3">
            本アプリとは、東京都内の本アプリのユーザーが登録したゴミ箱情報を取得、若しくは登録することによりゴミ箱の情報を共有できる「東京ゴミ箱マップ
            - みんなでシェアしてきれいな街へ -」と称するスマートフォン向けアプリのことを指します。
          </p>
        </div>
        <div className="mt-8">
          <p className="text-black text-xl font-semibold font-hiragino_kaku_3 mb-4">
            第2条 使用許諾
          </p>
          <p className="text-black text-base font-hiragino_kaku_3">
            非独占的かつ譲渡不要の承諾を得られる場合のみ、本アプリを使用することができます。ユーザーの本アプリにおける全ての利用権はユーザーに一身専属的に帰属し、第三者には譲渡・貸与できません。
          </p>
        </div>
        <div className="mt-8">
          <p className="text-black text-xl font-semibold font-hiragino_kaku_3 mb-4">
            第3条 位置情報
          </p>
          <p className="text-black text-base font-hiragino_kaku_3">
            本アプリは、快適な使用体験のためにユーザーの位置情報を任意で利用します。取得された位置情報は一切保存されず、第三者に情報が譲渡されることはありません。
          </p>
          <p className="text-black text-base font-hiragino_kaku_3">
            本アプリ内のマップにてユーザーがどこに位置しているかを表示することにのみ使用されます。
          </p>
        </div>
        <div className="mt-8">
          <p className="text-black text-xl font-semibold font-hiragino_kaku_3 mb-4">
            第4条 ゴミ箱情報
          </p>
          <p className="text-black text-base font-hiragino_kaku_3">
            本アプリに登録されたゴミ箱の情報は全て、本アプリユーザーによる提供された情報で、その情報に関わる権利は登録者に帰属します。
          </p>
          <p className="text-black text-base font-hiragino_kaku_3">
            また、それ故に本アプリのゴミ箱の情報は公的機関から提供されたものではございません。
          </p>
        </div>
        <div className="mt-8">
          <p className="text-black text-xl font-semibold font-hiragino_kaku_3 mb-4">
            第5条 知的財産
          </p>
          <p className="text-black text-base font-hiragino_kaku_3">
            本アプリ及び本アプリによって提供される情報に関わる著作権または知的財産は、本アプリ開発者または第三者に帰属します。
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
