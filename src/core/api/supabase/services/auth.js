import { supabase } from ".."

class AuthService {
  // when signing-up user, pass object with email, password, name, surname, phone
  async registerWithEmailAndPassword ({ email, password, avatar_file, ...rest }) {
    let res

    if(avatar_file) {
      const path = `${avatar_file.name}_${new Date().toISOString()}`
      await supabase.storage.from('announcments').upload(path, avatar_file)
      res = supabase.storage.from('announcments').getPublicUrl(path)
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          ...rest,
          avatar_url: res?.data?.publicUrl || ''
        }
      }
    })

    if (error) {
      throw error
    }

    return data
  }

  async loginWithEmailAndPassword (payload) {
    const { data, error } = await supabase.auth.signInWithPassword(payload)

    if (error) {
      throw error
    }

    return data
  }

  async logOut () {
    const { error } = await supabase.auth.signOut()

    if (error) {
      throw error
    }
  }

  async loadUser () {
    const { data: { user }, error } = await supabase.auth.getUser()

    if (error) {
      throw error
    }

    return user
  }

  async getUsers() {
    const { data, error } = await supabase.from('users').select()

    if(error) {
      throw error
    }

    return data
  }
}

export const authService = new AuthService()