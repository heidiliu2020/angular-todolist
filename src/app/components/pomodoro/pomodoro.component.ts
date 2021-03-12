import { Component, OnInit } from '@angular/core';
import { TimerStatus } from 'src/app/timer-status.enum';

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
  decrementFocusTime(): void {
    if (this.focusTime <= 1 || this.timerStatus === TimerStatus.COUNTING) {
      return;
    }
    this.focusTime = this.focusTime - 1;
    this.totalSeconds = this.focusTime * 60;
    this.displayTime();
  }

  incrementFocusTime(): void {
    if (this.focusTime >= 60 || this.timerStatus === TimerStatus.COUNTING) {
      return;
    }
    this.focusTime = this.focusTime + 1;
    this.totalSeconds = this.focusTime * 60;
    this.displayTime();
  }

  /**
   * Break Length
   */
  decrementBreakTime(): void {
    if (this.breakTime <= 1 || this.timerStatus === TimerStatus.COUNTING) {
      return;
    }
    this.breakTime = this.breakTime - 1;
    this.displayTime();
  }

  incrementBreakTime(): void {
    if (this.breakTime >= 60 || this.timerStatus === TimerStatus.COUNTING) {
      return;
    }
    this.breakTime = this.breakTime + 1;
    this.displayTime();
  }

}
