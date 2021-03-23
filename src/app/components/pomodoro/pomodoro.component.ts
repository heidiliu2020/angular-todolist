import { Component, OnInit } from '@angular/core';

// 定義三種計時器狀態: 停止/暫停/計時
const enum TimerStatus {
  STOP = 'STOP',
  PAUSE = 'PAUSE',
  COUNTING = 'COUNTING'
}

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.css']
})
export class PomodoroComponent implements OnInit {
  focusTime = 25;
  breakTime = 5;
  timeLeft = this.focusTime;
  totalSeconds = this.timeLeft * 60;
  showMinutes: string;
  showSeconds: string;
  timerId = null;
  timerType = 'FOCUS';      // 'BREAK'
  timerStatus = TimerStatus.STOP;     // 'COUNTING', 'PAUSE'

  constructor() { }

  ngOnInit(): void {
    this.displayTime();
  }

  // 根據 totalSeconds 顯示時間
  displayTime(): void {
    const seconds = this.totalSeconds % 60;
    const minutes = Math.floor((this.totalSeconds - seconds) / 60);

    this.showSeconds = (seconds < 10) ? `0${seconds}` : `${seconds}`;
    this.showMinutes = (minutes < 10) ? `0${minutes}` : `${minutes}`;
  }

  // 開始倒數
  startTimer(): void {
    this.timerStatus = TimerStatus.COUNTING;
    this.timerId = setInterval(() => {
      this.totalSeconds--;
      this.displayTime();
      if (this.totalSeconds <= 0) {
        clearInterval(this.timerId);
        this.changeTimer();
      }
    }, 1000);
  }

   // FOCUS 與 BREAK 互換
  changeTimer(): void {
    if (this.timerType === 'FOCUS') {
      this.timerType = 'BREAK';
      this.timeLeft = this.breakTime;
    } else {
      this.timerType = 'FOCUS';
      this.timeLeft = this.focusTime;
    }
    this.totalSeconds = this.timeLeft * 60;
    this.startTimer();
  }

  // 暫停 timer
  pauseTimer(): void {
    this.timerStatus = TimerStatus.PAUSE;
    clearInterval(this.timerId);
  }

  // 點選 Reset 重置 timer
  resetTimer(): void {
    this.timerType = 'FOCUS';
    this.timerStatus = TimerStatus.STOP;
    clearInterval(this.timerId);
    this.focusTime = 25;
    this.breakTime = 5;
    this.totalSeconds = this.focusTime * 60;
    this.displayTime();
  }

  /**
   * Focus Length
   */
  setFocusTime(time: number): void {
    if (this.timerStatus !== TimerStatus.COUNTING) {
      this.focusTime += time;
      if (this.focusTime <= 1 ) {
        this.focusTime = 1;
      }
      if (this.timerType === 'FOCUS') {
        this.totalSeconds = this.focusTime * 60;
        this.displayTime();
      }
    }
  }

  /**
   * Break Length
   */
  setBreakTime(time: number): void {
    if (this.timerStatus !== TimerStatus.COUNTING) {
      this.breakTime += time;
      if (this.breakTime <= 1 ) {
        this.breakTime = 1;
      }
      if (this.timerType === 'BREAK') {
        this.totalSeconds = this.breakTime * 60;
        this.displayTime();
      }
    }
  }

}
