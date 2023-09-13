import { supabase } from ".."

class AnnouncementsService {
  // create announcement and return it

  async getAnnouncments(id) {
    let query = supabase.from('Announcement').select(`
    id,
    VehicleTypes(id, name),
    Brands(id, name),
    CarModels(id, name),
    mileage,
    mileage_unit,
    BodyTypes(id, name),
    States(id, name),
    Cities(id, name),
    description,
    no_car_dealers_calls,
    color:color(id, name),
    shipped_from,
    crashed,
    TechnicalStates(id, name),
    PaintCoatings(id, name),
    AirConditioners(id, name),
    ElectricWindows(id, name),
    InteriorMaterials(id, name),
    interior_color:interior_color(id, name),
    PowerSteerings(id, name),
    SteeringWheelAdjustments(id, name),
    SpareWheels(id, name),
    Headlights(id, name),
    SeatAdjustments(id, name),
    SeatHeatings(id, name),
    SeatVentilations(id, name),
    price_us,
    discount_for_uaf,
    cleared_by_cuctoms,
    possible_bargaing,
    possible_exchange,
    possible_partial_pay,
    FuelTypes(id, name),
    TransmissionTypes(id, name),
    DriveTypes(id, name),
    engine_volume,
    users(id, firstname, lastname, phone, avatar_url),
    AnnouncementsPhotos(id, url),
    vehicle_year,
    created_at
    `)

    if(id) {
      query = query.eq('id', id)
    }

    const { data, error } = await query

    if(error) {
      throw error
    }

    return data
  }

  async createAnnouncment(payload, photos) {
    const { data, error } = await supabase.from('Announcement').insert(payload).select(`
    id,
    VehicleTypes(id, name),
    Brands(id, name),
    CarModels(id, name),
    mileage,
    mileage_unit,
    BodyTypes(id, name),
    States(id, name),
    Cities(id, name),
    description,
    no_car_dealers_calls,
    color:color(id, name),
    shipped_from,
    crashed,
    TechnicalStates(id, name),
    PaintCoatings(id, name),
    AirConditioners(id, name),
    ElectricWindows(id, name),
    InteriorMaterials(id, name),
    interior_color:interior_color(id, name),
    PowerSteerings(id, name),
    SteeringWheelAdjustments(id, name),
    SpareWheels(id, name),
    Headlights(id, name),
    SeatAdjustments(id, name),
    SeatHeatings(id, name),
    SeatVentilations(id, name),
    price_us,
    discount_for_uaf,
    cleared_by_cuctoms,
    possible_bargaing,
    possible_exchange,
    possible_partial_pay,
    FuelTypes(id, name),
    TransmissionTypes(id, name),
    DriveTypes(id, name),
    engine_volume,
    users(id, firstname, lastname, phone, avatar_url),
    vehicle_year,
    created_at
    `)

    photos.forEach(async (photo) => {

      const path = `${photo.name}_${new Date().toISOString()}`
      await supabase.storage.from('announcments').upload(path, photo)
      const res = supabase.storage.from('announcments').getPublicUrl(path)

      await supabase.from('AnnouncementsPhotos').insert({
        announcement: data[0].id,
        url: res.data.publicUrl
      })
    })

    if(error) {
      throw error
    }

    return data
  }
} 

export const announcementsService = new AnnouncementsService()