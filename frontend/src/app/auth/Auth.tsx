'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { IAuthForm } from '@/types/auth.types'

export function Auth() {
	const { register, reset, handleSubmit } = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const [isLogin, setIsLogin] = useState(false)
	const { push } = useRouter()
	

	return (
		<div>
			<h2>Auth</h2>
			<form
				action='#'
				className='flex flex-col'
			>
				<input
					type='text'
					placeholder='Email'
				/>
				<input
					type='text'
					placeholder='Password'
				/>
			</form>
		</div>
	)
}
