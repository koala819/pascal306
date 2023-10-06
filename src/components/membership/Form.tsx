'use client';
import { PersonalInfos } from './PersonalInfos';
import { Garage } from './Garage';
import { Summary } from './Summary';
import { Paypal } from './Paypal';
import { SignUp } from './SignUp';

export const Form = ({
  step,
  setStep,
  session,
}: {
  step: number;
  setStep: any;
  session: any;
}) => {
  return (
    <main
      aria-label="Main"
      className="flex items-center justify-center lg:col-span-7 lg:px-8 xl:col-span-6"
    >
      <div>
        <div className="relative block lg:hidden">
          <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Club 306
          </h1>
          <p className="mt-4 leading-relaxed text-gray-500">
            Rejoins nous dans l&apos;aventure Peugeot 306.
          </p>
        </div>
        {step == 1 && <PersonalInfos setStep={setStep} />}
        {step == 2 && <Garage setStep={setStep} />}
        {step == 3 && <Summary setStep={setStep} />}
        {step == 4 && <Paypal setStep={setStep} />}
        {step == 5 && <SignUp session={session} />}
      </div>
    </main>
  );
};
