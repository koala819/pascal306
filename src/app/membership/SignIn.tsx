'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  CheckCircleFilled,
  CloseCircleFilled,
  GoogleCircleFilled,
  MailFilled,
} from '@ant-design/icons';
import { signIn, useSession } from 'next-auth/react';
import { Button, ConfigProvider } from 'antd';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { MailPwd } from '@/app/models';

export const SignIn = ({
  setStep,
  setMailInfo,
}: {
  setStep: any;
  setMailInfo: React.Dispatch<React.SetStateAction<MailPwd>>;
}) => {
  const [watch, setWatch] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [cPasswordVisible, setCPasswordVisible] = useState(false);
  const { data: session } = useSession();

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("L'email est obligatoire")
      .email("Le format de l'email est invalide"),
    pwd: yup
      .string()
      .required('Le mot de passe est obligatoire')
      .min(8, 'Le mot de passe doit avoir 8 caractères minimum'),
    cpwd: yup
      .string()
      .required('Le mot de passe est obligatoire')
      .oneOf([yup.ref('pwd')], 'Les mots de passe doivent être identiques'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MailPwd>({
    resolver: yupResolver(schema),
  });

  const handleAddMailInfos = (data: MailPwd) => {
    console.log('\n\n\ntu as cliqué BRAVO\n\n\n', data);
    setMailInfo(data);
    setStep((s: number) => s + 1);
  };

  const handleLoginClick = () => {
    setWatch(true);
  };
  const handleCancelLoginClick = () => {
    setWatch(false);
  };

  if (session) {
    console.log('session FOUND');
    setStep((s: number) => s + 1);
  }

  return (
    <section className="grid sm:grid-cols-12 sm:gap-12 py-6 bg-white rounded-lg shadow-lg overflow-hidden mx-auto">
      <div className="flex items-center justify-center col-span-12">
        <div className="flex rounded-lg overflow-hidden  w-full">
          <div className="w-full p-8 space-y-12">
            {!watch && (
              <Link href="">
                <ConfigProvider
                  theme={{
                    token: {
                      fontSize: 18,
                    },
                  }}
                >
                  <Button
                    onClick={() => signIn('google')}
                    type="primary"
                    size="large"
                    block
                    icon={<GoogleCircleFilled />}
                  >
                    Se connecter avec Google
                  </Button>
                </ConfigProvider>
              </Link>
            )}
            <div>
              {!watch ? (
                <ConfigProvider
                  theme={{
                    token: {
                      fontSize: 18,
                    },
                  }}
                >
                  <Button
                    onClick={handleLoginClick}
                    type="primary"
                    size="large"
                    block
                    icon={<MailFilled />}
                  >
                    Se connecter avec son mail
                  </Button>
                </ConfigProvider>
              ) : (
                <form className="space-y-8">
                  {/* EMAIL */}
                  <div className="col-span-6 sm:col-span-3 relative z-0 mt-8">
                    <input
                      type="text"
                      id="email"
                      className={`${'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'}
            ${errors.email && 'border-red-600'}`}
                      {...register('email')}
                      placeholder=" "
                    />
                    <label
                      htmlFor="email"
                      className={`${'peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'} ${
                        errors.email && 'text-red-500 font-mono text-sm'
                      }`}
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    {errors.email && (
                      <span className="text-red-500 font-mono text-xs">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  {/* PASSWORD */}
                  <div className="col-span-6 sm:col-span-3 relative z-0 mt-8 flex items-center space-x-4">
                    <input
                      type={`${passwordVisible ? 'text' : 'password'}`}
                      id="pwd"
                      className={`${'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'}
    ${errors.pwd && 'border-red-600'}`}
                      {...register('pwd')}
                      placeholder=" "
                    />
                    <Button
                      style={{ width: 80 }}
                      onClick={() =>
                        setPasswordVisible((prevState) => !prevState)
                      }
                    >
                      {passwordVisible ? 'Cacher' : 'Afficher'}
                    </Button>
                    <label
                      htmlFor="pwd"
                      className={`${'peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'} ${
                        errors.pwd && 'text-red-500 font-mono text-sm'
                      }`}
                    >
                      Mot de passe <span className="text-red-500">*</span>
                    </label>
                  </div>
                  {errors.pwd && (
                    <span className="text-red-500 font-mono text-xs">
                      {errors.pwd.message}
                    </span>
                  )}

                  {/* CONFIRM PASSWORD */}
                  <div className="col-span-6 sm:col-span-3 relative z-0 mt-8  flex items-center space-x-4">
                    <input
                      type={`${cPasswordVisible ? 'text' : 'password'}`}
                      id="cpwd"
                      className={`${'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'}
    ${errors.cpwd && 'border-red-600'}`}
                      {...register('cpwd')}
                      placeholder=" "
                    />
                    <Button
                      style={{ width: 80 }}
                      onClick={() =>
                        setCPasswordVisible((prevState) => !prevState)
                      }
                    >
                      {cPasswordVisible ? 'Cacher' : 'Afficher'}
                    </Button>
                    <label
                      htmlFor="cpwd"
                      className={`${'peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'} ${
                        errors.cpwd && 'text-red-500 font-mono text-sm'
                      }`}
                    >
                      Confirmer le Mot de passe{' '}
                      <span className="text-red-500">*</span>
                    </label>
                  </div>
                  {errors.cpwd && (
                    <span className="text-red-500 font-mono text-xs">
                      {errors.cpwd.message}
                    </span>
                  )}
                  {/* BUTTONS RECORD & CANCEL */}
                  <div className="flex  w-full justify-between mt-4">
                    <Button
                      onClick={handleCancelLoginClick}
                      type="primary"
                      size="large"
                      danger
                      icon={<CloseCircleFilled />}
                    >
                      Annuler
                    </Button>
                    <Button
                      onClick={handleSubmit(handleAddMailInfos)}
                      type="primary"
                      size="large"
                      icon={<CheckCircleFilled />}
                    >
                      Enregistrer
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};