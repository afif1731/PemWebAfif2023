import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'nama_user',
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'nama_user',
      type: 'text',
      unique: true
    }
  ],
}

export default Users
