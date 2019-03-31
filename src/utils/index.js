export default {
    addZero (num) {
        return num < 10 ? '0' + num : num;
    },
    // 格式化系统时间
    formattingTime (date) {
        if (!date) return '';
        let time = new Date(date);
        let year = time.getFullYear();
        let month = time.getMonth() + 1;
        let day = time.getDate();
        let hour = time.getHours();
        let minute = time.getMinutes();
        let seconds = time.getSeconds();
        return `${year}-${month}-${day} ${this.addZero(hour)}:${this.addZero(minute)}:${this.addZero(seconds)}`
    }
}