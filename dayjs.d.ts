import { FastifyPluginCallback } from 'fastify'
import dayjs from 'dayjs'
import 'dayjs/plugin/advancedFormat'
import 'dayjs/plugin/arraySupport'
import 'dayjs/plugin/badMutable'
import 'dayjs/plugin/buddhistEra'
import 'dayjs/plugin/calendar'
import 'dayjs/plugin/customParseFormat'
import 'dayjs/plugin/dayOfYear'
import 'dayjs/plugin/devHelper'
import 'dayjs/plugin/duration'
import 'dayjs/plugin/isBetween'
import 'dayjs/plugin/isLeapYear'
import 'dayjs/plugin/isMoment'
import 'dayjs/plugin/isSameOrAfter'
import 'dayjs/plugin/isSameOrBefore'
import 'dayjs/plugin/isToday'
import 'dayjs/plugin/isTomorrow'
import 'dayjs/plugin/isYesterday'
import 'dayjs/plugin/isoWeek'
import 'dayjs/plugin/isoWeeksInYear'
import 'dayjs/plugin/localeData'
import 'dayjs/plugin/localizedFormat'
import 'dayjs/plugin/minMax'
import 'dayjs/plugin/objectSupport'
import 'dayjs/plugin/pluralGetSet'
import 'dayjs/plugin/preParsePostFormat'
import 'dayjs/plugin/quarterOfYear'
import 'dayjs/plugin/relativeTime'
import 'dayjs/plugin/timezone'
import 'dayjs/plugin/toArray'
import 'dayjs/plugin/toObject'
import 'dayjs/plugin/updateLocale'
import 'dayjs/plugin/utc'
import 'dayjs/plugin/weekOfYear'
import 'dayjs/plugin/weekYear'
import 'dayjs/plugin/weekday'

declare const fastifyDayjs: FastifyPluginCallback

export default fastifyDayjs

declare module 'fastify' {
	interface FastifyInstance {
		dayjs: typeof dayjs
	}
}
