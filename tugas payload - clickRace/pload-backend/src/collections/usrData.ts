import { CollectionConfig } from "payload/types";

const usrdata: CollectionConfig = {
    slug: 'usrdata',
    fields: [
        {
            name: 'username',
            type: 'relationship',
            relationTo: 'users',
            required: true,
        },
        {
            name: 'highest_cps',
            type: 'number',
            defaultValue: 0,
            required: false
        }
    ]
}

export default usrdata