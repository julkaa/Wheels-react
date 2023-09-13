import { supabase } from ".."

class SelectsSetvice {
  async getAirConditioners() {
    const { data, error } = await supabase.from('AirConditioners').select()

    if(error) {
      throw error
    }

    return data
  }

  async getBodyTypes() {
    const { data, error } = await supabase.from('BodyTypes').select()

    if(error) {
      throw error
    }

    return data
  }

  async getBrands() {
    const { data, error } = await supabase.from('Brands').select()

    if(error) {
      throw error
    }

    return data
  }

  async getCarModels() {
    const { data, error } = await supabase.from('CarModels').select()

    if(error) {
      throw error
    }

    return data
  }

  // specify the country id to filter by it
  async getCities(stateId) {
    const query = supabase.from('Cities').select(`
    id,
    name,
    created_at,
    States!inner(*)
    `)

    if(stateId) {
      query.eq('States.id', stateId)
    }

    const { data, error } = await query

    if(error) {
      throw error
    }

    return data
  }

  async getColors() {
    const { data, error } = await supabase.from('Colors').select()

    if(error) {
      throw error
    }

    return data
  }

  async getCountries() {
    const { data, error } = await supabase.from('Countries').select()

    if(error) {
      throw error
    }

    return data
  }

  async getDriveTypes() {
    const { data, error } = await supabase.from('DriveTypes').select()

    if(error) {
      throw error
    }

    return data
  }

  async getElectricWindows() {
    const { data, error } = await supabase.from('ElectricWindows').select()

    if(error) {
      throw error
    }

    return data
  }

  async getFuelTypes() {
    const { data, error } = await supabase.from('FuelTypes').select()

    if(error) {
      throw error
    }

    return data
  }

  async getHeadlights() {
    const { data, error } = await supabase.from('Headlights').select()

    if(error) {
      throw error
    }

    return data
  }

  async getInteriorMaterials() {
    const { data, error } = await supabase.from('InteriorMaterials').select()

    if(error) {
      throw error
    }

    return data
  }

  async getPaintCoatings() {
    const { data, error } = await supabase.from('PaintCoatings').select()

    if(error) {
      throw error
    }

    return data
  }

  async getPowerSteerings() {
    const { data, error } = await supabase.from('PowerSteerings').select()

    if(error) {
      throw error
    }

    return data
  }

  async getSeatAdjustments() {
    const { data, error } = await supabase.from('SeatAdjustments').select()

    if(error) {
      throw error
    }

    return data
  }

  async getSeatHeatings() {
    const { data, error } = await supabase.from('SeatHeatings').select()

    if(error) {
      throw error
    }

    return data
  }

  async getSeatVentilations() {
    const { data, error } = await supabase.from('SeatVentilations').select()

    if(error) {
      throw error
    }

    return data
  }

  async getSpareWheels() {
    const { data, error } = await supabase.from('SpareWheels').select()

    if(error) {
      throw error
    }

    return data
  }

  async getStates() {
    const { data, error } = await supabase.from('States').select()

    if(error) {
      throw error
    }

    return data
  }

  async getSteeringWheelAdjustments() {
    const { data, error } = await supabase.from('SteeringWheelAdjustments').select()

    if(error) {
      throw error
    }

    return data
  }

  async getTechnicalStates() {
    const { data, error } = await supabase.from('TechnicalStates').select()

    if(error) {
      throw error
    }

    return data
  }

  async getTransmissionTypes() {
    const { data, error } = await supabase.from('TransmissionTypes').select()

    if(error) {
      throw error
    }

    return data
  }

  async getVehicleTypes() {
    const { data, error } = await supabase.from('VehicleTypes').select()

    if(error) {
      throw error
    }

    return data
  }
}

export const selectService = new SelectsSetvice()