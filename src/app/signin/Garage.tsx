'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { getAllColors } from '../../lib/supabase';

interface Vehicles {
  immatriculation: string;
  mine: string;
  model: string;
  color: string;
  finition: string;
}

interface Color {
  id: number;
  nom: string;
  hexa: string;
}

export const Garage = ({
  setStep,
  setVehicles,
  vehicles,
}: {
  setStep: any;
  setVehicles: React.Dispatch<React.SetStateAction<Vehicles[]>>;
  vehicles: Vehicles[];
}) => {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [colors, setColors] = useState<Color[]>([]);

  const schema = yup.object().shape({
    immatriculation: yup
      .string()
      .min(4, "L'Immatriculation doit avoir 4 caractères minimum")
      .max(10, "L'Immatriculation doit avoir 10 caractères maximum")
      .required("L'Immatriculation est obligatoire"),
    mine: yup.string().required('Le Type Mine est obligatoire'),
    model: yup.string().required('Le choix du Modèle est obligatoire'),
    color: yup.string().required('Le choix de la Couleur est obligatoire'),
    finition: yup.string().required('La Finition est obligatoire'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Vehicles>({
    resolver: yupResolver(schema),
  });

  const handleGoBack = () => {
    setStep((s: number) => {
      return s - 1;
    });
  };

  const handleAddVehicle = (data: Vehicles) => {
    setVehicles([...vehicles, data]);
    reset();
  };

  const handleNext = () => {
    setStep((s: number) => s + 1);
  };

  const handleEditVehicle = (index: number) => {
    setEditIndex(index);
    reset(vehicles[index]);
  };

  const handleUpdateVehicle = (data: Vehicles) => {
    const updatedVehicles = [...vehicles];
    if (editIndex !== null) {
      updatedVehicles[editIndex] = data;
      setVehicles(updatedVehicles);
      setEditIndex(null);
      reset({
        immatriculation: '',
        mine: '',
        model: '',
        color: '',
        finition: '',
      });
    }
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    reset({
      immatriculation: '',
      mine: '',
      model: '',
      color: '',
      finition: '',
    });
  };

  const handleDeleteVehicle = (index: number) => {
    const updatedVehicles = [...vehicles];
    updatedVehicles.splice(index, 1);
    setVehicles(updatedVehicles);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllColors();

      if (response !== null && response.data !== null) {
        const fetchedColors: Color[] = response.data.map((color: any) => {
          return {
            id: color.id,
            nom: color.nom,
            hexa: color.hexa,
          };
        });
        setColors(fetchedColors);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <form
        onSubmit={
          editIndex !== null
            ? handleSubmit(handleUpdateVehicle)
            : handleSubmit(handleAddVehicle)
        }
      >
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3 relative z-0">
            <input
              type="text"
              id="immatriculation"
              {...register('immatriculation')}
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 ${
                errors.immatriculation && editIndex === null
                  ? 'border-red-500'
                  : ''
              }`}
              placeholder=" "
            />
            <label
              htmlFor="immatriculation"
              className={`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                errors.immatriculation && editIndex === null
                  ? 'text-red-500 font-mono text-sm'
                  : ''
              }`}
            >
              Immatriculation
            </label>

            {editIndex === null && errors.immatriculation && (
              <div className="text-red-500 font-mono text-xs">
                {errors.immatriculation.message}
              </div>
            )}
          </div>

          <div className="col-span-6 sm:col-span-3 relative z-0">
            <input
              type="text"
              id="mine"
              {...register('mine')}
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 ${
                errors.mine && editIndex === null ? 'border-red-500' : ''
              }`}
              placeholder=" "
            />
            <label
              htmlFor="mine"
              className={`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                errors.mine && editIndex === null
                  ? 'text-red-500 font-mono text-sm'
                  : ''
              }`}
            >
              Type Mine
            </label>

            {editIndex === null && errors.mine && (
              <div className="text-red-500 font-mono text-xs">
                {errors.mine.message}
              </div>
            )}
          </div>

          <div className="col-span-6 sm:col-span-3 relative z-0">
            <select
              id="model"
              {...register('model')}
              className={`block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer ${
                errors.model && editIndex === null
                  ? 'border-red-500 text-red-500 text-sm font-mono'
                  : ''
              }`}
            >
              <option
                value=""
                label="Quel est le modèle de votre 306 ?"
              ></option>
              <option value="3 Portes" label="3 Portes">
                3 Portes
              </option>
              <option value="5 Portes" label="5 Portes">
                5 Portes
              </option>
              <option value="Break" label="Break">
                Break
              </option>
              <option value="Cabriolet" label="Cabriolet">
                Cabriolet
              </option>
            </select>
            <label
              htmlFor="model"
              className={`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                errors.model && editIndex === null
                  ? 'text-red-500 font-mono text-sm'
                  : ''
              }`}
            >
              Modèle
            </label>

            {editIndex === null && errors.model && (
              <div className="text-red-500 font-mono text-xs">
                {errors.model.message}
              </div>
            )}
          </div>

          <div className="col-span-6 sm:col-span-3 relative z-0">
            <select
              id="color"
              {...register('color')}
              className={`block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer ${
                errors.model && editIndex === null
                  ? 'border-red-500 text-red-500 text-sm font-mono'
                  : ''
              }`}
            >
              <option value="">Choix de la couleur </option>
              {colors
                .sort((a, b) => a.nom.localeCompare(b.nom))
                .map((color: Color) => (
                  <option
                    key={color.id}
                    value={color.nom}
                    style={{ backgroundColor: `#${color.hexa}` }}
                  >
                    {color.nom}
                  </option>
                ))}
            </select>
            <label
              htmlFor="color"
              className={`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                errors.color && editIndex === null
                  ? 'text-red-500 font-mono text-sm'
                  : ''
              }`}
            >
              Couleur
            </label>

            {editIndex === null && errors.color && (
              <div className="text-red-500 font-mono text-xs">
                {errors.color.message}
              </div>
            )}
          </div>

          <div className="col-span-6 sm:col-span-3 relative z-0">
            <input
              type="text"
              id="finition"
              {...register('finition', { required: 'Finition is required' })}
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 ${
                errors.finition && editIndex === null ? 'border-red-500' : ''
              }`}
              placeholder=" "
            />
            <label
              htmlFor="finition"
              className={`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                errors.finition && editIndex === null
                  ? 'text-red-500 font-mono text-sm'
                  : ''
              }`}
            >
              Finition
            </label>

            {editIndex === null && errors.finition && (
              <div className="text-red-500 font-mono text-xs">
                {errors.finition.message}
              </div>
            )}
          </div>
        </div>
        <div className="mt-4">
          {editIndex !== null ? (
            <>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Mettre à jour
              </button>
              <button
                type="button"
                onClick={handleCancelEdit}
                className="ml-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
              >
                Annuler
              </button>
            </>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
            >
              Ajouter une 306
            </button>
          )}
        </div>
      </form>
      <div className="mt-24">
        {vehicles.map((vehicle, index) => (
          <div key={index} className="bg-gray-100 p-4 mb-4">
            <div>
              <span className="font-bold">Immatriculation:</span>{' '}
              {vehicle.immatriculation}
            </div>
            <div>
              <span className="font-bold">Model:</span> {vehicle.model}
            </div>
            <div>
              <span className="font-bold">Color:</span> {vehicle.color}
            </div>
            <div>
              <span className="font-bold">Finition:</span> {vehicle.finition}
            </div>
            <div className="mt-2">
              <button
                type="button"
                onClick={() => handleEditVehicle(index)}
                className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Modifier
              </button>
              <button
                type="button"
                onClick={() => handleDeleteVehicle(index)}
                className="ml-2 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex  w-full justify-between mt-4">
        <button
          type="button"
          className="hover:bg-red-600 bg-red-800  active:bg-red-200 text-gray-100 text-xl px-7 py-1.5 rounded "
          onClick={handleGoBack}
        >
          Retour
        </button>
        <button
          type="button"
          className="hover:bg-green-600 bg-green-800  active:bg-green-200 text-gray-100 text-xl px-7 py-1.5 rounded ml-auto"
          onClick={handleNext}
        >
          Suivant
        </button>
      </div>
    </>
  );
};
