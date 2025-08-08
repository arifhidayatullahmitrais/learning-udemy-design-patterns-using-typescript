class Logger {
  private static instance: Logger

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger()
    }
    return Logger.instance
  }

  public log(message: string): void {
    const timestamp = new Date()
    console.log(`[ ${timestamp.toLocaleString()}] - ${message}`)
  }
}

// New instance
let logger1 = Logger.getInstance()
logger1.log('This is the first message')

let logger2 = Logger.getInstance()
logger2.log('This is the message two')
