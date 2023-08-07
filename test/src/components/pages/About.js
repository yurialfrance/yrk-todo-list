import React from 'react';


function About() {
  
  return (
  <div className='container'>
    <div className='about-container'>
      <div className='about-section'>
        <h1 className='highlight'>About Our To-Do App</h1>
        <p>Welcome to our to-do app! Stay organized and manage your tasks effectively with our intuitive and user-friendly application.</p>
        <p>To Do アプリへようこそ! 直感的でユーザーフレンドリーなアプリケーションでタスクを整理し、効果的に管理します。</p>
      </div>

      <div className='about-section'>
        <br/>
        <h2 className='highlight'>Features (特徴)</h2>
        <ul className='feature-list'>
          <li>Easy task creation and management</li>
          <p>タスクの作成と管理が簡単</p>
          <li>Prioritize tasks with different levels of importance</li>
          <p>重要度が異なるタスクに優先順位を付ける</p>
          <li>Set due dates and reminders for tasks</li>
          <p>タスクの期日とリマインダーを設定する</p>
          <li>Mark tasks as completed and track your progress</li>
          <p>タスクを完了としてマークし、進捗状況を追跡する</p>
        </ul>
      </div>

      <br/>

      <div className='about-section'>
        <h2 className='highlight'>Team Collaboration (チームのコラボレーション)</h2>
        <p>Collaborate with your team members on shared tasks and projects. Stay updated on each other's progress and ensure smooth coordination.</p>
        <p>共有タスクやプロジェクトについてチームメンバーと協力します。 お互いの進捗状況を常に最新の状態に保ち、スムーズな調整を確保します。</p>
      </div>

      <br/>

      <div className='about-section'>
        <h2 className='highlight'>Contact Us (お問い合わせ)</h2>
        <p>If you have any questions, feedback, or suggestions, feel free to contact our support team at yrksupport@todolistapp.com.</p>
        <p>ご質問、フィードバック、ご提案がございましたら、サポート チーム (yrksupport@todolistapp.com) までお気軽にお問い合わせください。</p>
      </div>
    </div>
  </div>
  );
}


export default About;
