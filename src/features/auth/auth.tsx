import { useEffect, useRef } from 'react';
import { isError } from 'util';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import authSlice from './authSlice';

let isInitial = true

export const Auth = () => {
    const dispatch = useAppDispatch()
    const personalInfo = useAppSelector((state) => state.authReducer.info)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwdRef = useRef<HTMLInputElement>(null)

    useEffect(()=> {
        console.log('useEffect')
        const sendAccountData = async () => {
            console.log(`notify: sending data`)
        }
        if(isInitial) {
            isInitial = false
            console.log('notify: is initial')
            return
        }
        sendAccountData().catch((e) => {
            console.log(`notify: error $(e)`)
        })
        const timeout = setTimeout(()=> {
            console.log(`notify: set blank`)
        })

        return () => {
            clearTimeout(timeout)
        }
    }, [personalInfo, dispatch])

    const loginHandler = (e: any) => {
        e.preventDefault()
        dispatch(
            authSlice.actions.login({
                email: emailRef.current?.value,
                passwd: passwdRef.current?.value
            })
        )
    }

    return (
        <div>
            <div>
                <input ref={emailRef} placeholder='email' ></input>
            </div>
            <div>
                <input ref={passwdRef} placeholder='passwd' ></input>
                <button onClick={loginHandler}>login</button>
            </div>
        </div>
    )
}
