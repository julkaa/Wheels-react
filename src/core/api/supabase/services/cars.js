import { supabase } from ".."

class CarService {
  async getCars() {
    const {data, error} = supabase.from('cars').select()

    if(error) {
      throw error
    }

    return data
  }
}

export const carService = new CarService()