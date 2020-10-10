import * as React from 'react'
import { Svg } from './styles'

export const Logo = props => {
  return (
    <div>
      <Svg
        width={749.767}
        height={120.81}
        viewBox='-124.884 14.595 749.767 120.81'
        style={{
          background: '0 0'
        }}
        preserveAspectRatio='xMidYMid'
        {...props}
      >
        <defs>
          <filter id='prefix__editing-vr'>
            <feFlood floodColor='red' floodOpacity={0.7} result='c1' />
            <feFlood floodColor='#00f' floodOpacity={0.7} result='c3' />
            <feComposite
              operator='in'
              in='c1'
              in2='SourceAlpha'
              result='text-c1'
            />
            <feComposite
              operator='in'
              in='c3'
              in2='SourceAlpha'
              result='text-c3'
            />
            <feOffset in='text-c1' dx={5} dy={-1} result='text1' />
            <feOffset in='text-c3' dx={-5} dy={1} result='text3' />
            <feBlend
              in='SourceGraphic'
              in2='text1'
              mode='multiply'
              result='text4'
            />
            <feBlend in='text4' in2='text3' mode='multiply' />
          </filter>
        </defs>
        <g filter='url(#prefix__editing-vr)'>
          <path
            d='M24.485 91.47q0 2.18-.55 3.92-.55 1.74-1.46 3.07-.91 1.33-2.12 2.27-1.22.93-2.52 1.53-1.31.59-2.65.88-1.35.28-2.54.28h-28.4v-7.36h28.4q2.13 0 3.3-1.25 1.18-1.25 1.18-3.34 0-1.02-.31-1.87-.31-.85-.9-1.47-.58-.63-1.41-.97-.84-.34-1.86-.34h-16.93q-1.79 0-3.85-.63-2.07-.64-3.84-2.06-1.77-1.41-2.95-3.71-1.17-2.29-1.17-5.6 0-3.32 1.17-5.6 1.18-2.28 2.95-3.71 1.77-1.43 3.84-2.06 2.06-.64 3.85-.64h25.06v7.36h-25.06q-2.1 0-3.27 1.28-1.18 1.27-1.18 3.37 0 2.12 1.18 3.35 1.17 1.23 3.27 1.23h16.99q1.19.03 2.52.33 1.33.3 2.65.92 1.32.62 2.51 1.57 1.18.95 2.11 2.28.92 1.33 1.45 3.06.54 1.73.54 3.91zm39.06-8.36v9.97q0 1.9-.49 3.42-.48 1.51-1.27 2.66-.79 1.14-1.84 1.95t-2.2 1.32q-1.14.51-2.3.75-1.17.24-2.21.24h-13.29v-7.36h13.29q1.47 0 2.21-.77.73-.76.73-2.21v-9.91q0-1.53-.75-2.26-.75-.74-2.19-.74h-13.23q-1.5 0-2.26.75-.77.75-.77 2.19v29.88h-7.36V83.11q0-1.89.48-3.39.48-1.51 1.29-2.65.8-1.15 1.85-1.96 1.05-.8 2.2-1.31 1.14-.51 2.32-.75t2.19-.24h13.29q1.89 0 3.4.48 1.5.48 2.64 1.27 1.15.79 1.96 1.84.8 1.05 1.31 2.2.51 1.14.75 2.31.25 1.16.25 2.2zm37.89-.17v10.34q0 1.53-.54 3.3-.54 1.77-1.74 3.29-1.21 1.51-3.15 2.53-1.94 1.02-4.71 1.02h-13.28q-1.53 0-3.3-.54-1.77-.54-3.29-1.74-1.51-1.2-2.53-3.14-1.02-1.94-1.02-4.72 0-1.53.54-3.31.53-1.79 1.74-3.3 1.2-1.52 3.14-2.54 1.94-1.02 4.72-1.02h13.28v7.03h-13.28q-1.5 0-2.33.92-.82.92-.82 2.28 0 1.44.95 2.25t2.25.81h13.23q1.5 0 2.32-.91.82-.91.82-2.27V82.94q0-1.44-.89-2.29-.89-.85-2.25-.85h-16.17v-6.99h16.17q1.53 0 3.3.53 1.77.54 3.28 1.75 1.52 1.2 2.54 3.14 1.02 1.94 1.02 4.71zm35.94 13.12v7.36h-19.97q-1.53 0-3.34-.54-1.81-.54-3.36-1.77-1.54-1.23-2.57-3.2-1.04-1.97-1.04-4.83v-9.97q0-1.04.24-2.2.24-1.17.75-2.31.51-1.15 1.32-2.2.81-1.05 1.95-1.84 1.15-.79 2.65-1.27t3.4-.48h19.97v7.36h-19.97q-1.44 0-2.19.74-.75.73-.75 2.26v9.91q0 1.45.76 2.21.76.77 2.24.77h19.91zm38.8-13.12q0 1.53-.54 3.3-.54 1.77-1.74 3.29-1.21 1.51-3.15 2.53-1.94 1.02-4.71 1.02h-13.29v-6.99h13.29q1.5 0 2.32-.92.82-.92.82-2.28 0-1.45-.92-2.27-.92-.82-2.22-.82h-13.29q-1.5 0-2.32.92-.82.92-.82 2.28v10.28q0 1.47.92 2.3.92.82 2.28.82h13.23v7.02h-13.29q-1.52 0-3.29-.54t-3.29-1.74q-1.52-1.2-2.53-3.14-1.02-1.94-1.02-4.72V82.94q0-1.52.53-3.29.54-1.77 1.75-3.29 1.2-1.52 3.14-2.53 1.94-1.02 4.71-1.02h13.29q1.53 0 3.3.53 1.77.54 3.28 1.75 1.52 1.2 2.54 3.14 1.02 1.94 1.02 4.71zm11.92-20.13l12.4 14.5 12.41-14.5h10.05l-17.47 20.36 17.36 20.25h-10l-12.35-14.39-12.29 14.39h-10.02l17.33-20.25-17.39-20.36h9.97zm83.94 16.99v6.63h-26.56V79.8h26.56zm60.01-.4v7.42h-23.28V79.4h23.28zm3.29-16.59v7.36h-29.51v33.25h-7.37v-36.9q0-.77.29-1.45.28-.68.77-1.19.5-.5 1.18-.79.68-.28 1.47-.28h33.17zm18.57 33.25v7.36h-3.28q-1.59 0-3.39-.54-1.79-.54-3.35-1.77t-2.58-3.2q-1.02-1.97-1.02-4.83V59.86h7.36v33.22q0 1.36.85 2.17.85.81 2.13.81h3.28zm12.21-36.2v6.66h-7.36v-6.66h7.36zm0 12.95v30.61h-7.36V72.81h7.36zm40.36 10.3v23.26q0 1.89-.49 3.41-.48 1.51-1.27 2.66-.79 1.15-1.84 1.95-1.05.81-2.2 1.32-1.14.51-2.32.75-1.17.24-2.22.24h-13.28v-7.36h13.28q1.5 0 2.24-.77.73-.76.73-2.2V83.11q0-1.44-.73-2.19-.74-.75-2.24-.75h-13.28q-1.36 0-2.16.83-.79.84-.79 2.11v9.97q0 1.45.77 2.21.76.77 2.23.77h13.23v7.36h-13.28q-1.05 0-2.21-.24t-2.31-.75q-1.15-.51-2.19-1.32-1.05-.81-1.85-1.95-.79-1.15-1.27-2.66-.48-1.52-.48-3.42v-9.97q0-1.04.24-2.2.24-1.17.75-2.31.51-1.15 1.32-2.2.8-1.05 1.95-1.84t2.65-1.27q1.5-.48 3.4-.48h13.28q1.05 0 2.22.24 1.18.24 2.32.75 1.15.51 2.2 1.31 1.05.81 1.84 1.96.79 1.14 1.27 2.65.49 1.5.49 3.39zm40.78 0v20.31h-7.37V83.11q0-1.44-.73-2.19-.74-.75-2.21-.75h-13.28v-7.36h13.28q1.05 0 2.21.24t2.31.75q1.14.51 2.19 1.31 1.05.81 1.84 1.96.79 1.14 1.28 2.65.48 1.5.48 3.39zm-26.57-23.25v43.56h-7.36V59.86h7.36zm60.98 12.95v7.36h-12.86v23.25h-7.45V80.17h-9.57v-7.36h9.57v-10h7.45v10h12.86zm34.43 20.27q0 1.9-.48 3.42-.48 1.51-1.27 2.66-.79 1.14-1.84 1.95t-2.2 1.32q-1.14.51-2.32.75-1.17.24-2.22.24h-19.94v-7.36h19.88q1.5 0 2.27-.77.76-.76.76-2.21-.14-2.94-2.97-2.94h-11.42q-2.43 0-4.13-.85-1.7-.85-2.76-2.13-1.06-1.27-1.53-2.74-.47-1.48-.47-2.75 0-2.46.88-4.15.88-1.68 2.21-2.73t2.89-1.52q1.55-.46 2.91-.46h18.1v7.36h-18.04q-.57 0-.89.13-.33.12-.48.34-.16.21-.19.45-.03.24-.03.47.03.45.17.7.15.26.36.37.21.12.48.13.27.01.52.01h11.42q2.83 0 4.81 1.02 1.98 1.02 3.2 2.57 1.22 1.54 1.77 3.35.55 1.82.55 3.37z'
            fill='#444'
          />
        </g>
        <style />
      </Svg>
    </div>
  )
}