let timecount = 120;

const timelimit = () => {
  if (timecount > 0) {
    const min = Math.floor(timecount / 60);
    if (min > 0) {
      const sec = String(timecount % 60).padStart(2, '0');
      console.log(`${min}:${sec}`);
    } else {
      const sec = String(timecount % 60);
      console.log(sec);
    }
    timecount--;
  } else {
    console.log('시간만료');
    clearInterval(timeout);
  }
};

const timeout = setInterval(timelimit, 1000);
// 2:00
// 1:59
// 1:58
// 1:57
// 1:56
// 1:55
// 1:54
// 1:53
// 1:52
// 1:51
// 1:50
// 1:49
// 1:48
// 1:47
// 1:46
// 1:45
// 1:44
// 1:43
// 1:42
// 1:41
// 1:40
// 1:39
// 1:38
// 1:37
// 1:36
// 1:35
// 1:34
// 1:33
// 1:32
// 1:31
// 1:30
// 1:29
// 1:28
// 1:27
// 1:26
// 1:25
// 1:24
// 1:23
// 1:22
// 1:21
// 1:20
// 1:19
// 1:18
// 1:17
// 1:16
// 1:15
// 1:14
// 1:13
// 1:12
// 1:11
// 1:10
// 1:09
// 1:08
// 1:07
// 1:06
// 1:05
// 1:04
// 1:03
// 1:02
// 1:01
// 1:00
// 59
// 58
// 57
// 56
// 55
// 54
// 53
// 52
// 51
// 50
// 49
// 48
// 47
// 46
// 45
// 44
// 43
// 42
// 41
// 40
// 39
// 38
// 37
// 36
// 35
// 34
// 33
// 32
// 31
// 30
// 29
// 28
// 27
// 26
// 25
// 24
// 23
// 22
// 21
// 20
// 19
// 18
// 17
// 16
// 15
// 14
// 13
// 12
// 11
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 시간만료