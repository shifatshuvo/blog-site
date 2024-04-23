export interface signUp {
  name: string,
  password: string,
  email: string
}

export interface login {
  email: string,
  password: string
}

export interface blog {
  titleName: string,
  category: string,
  description: string,
  image: string,
  id: number,
  creatorId: number,
  creatorName: string
}