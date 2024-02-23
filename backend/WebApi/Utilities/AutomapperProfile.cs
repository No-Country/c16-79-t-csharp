﻿using AutoMapper;
using Veterinaria.Application.DTO;
using Veterinaria.Domain.Models;

namespace WebApi.Utilities
{
    public class AutomapperProfile : Profile
    {
        public AutomapperProfile()
        {
            CreateMap<PetCreationDTO, Pet>().ForMember(d => d.Birthday, opt => opt.MapFrom(o => DateOnly.Parse(o.Birthday)))
                                            .ForMember(d => d.Id, o => o.Ignore())
                                            .ForMember(d => d.ClientUser, o => o.Ignore());
            CreateMap<Pet, PetDTO>().ForPath(d => d.ClientUserName, opt => opt.MapFrom(o => o.ClientUser.Name))
                                    .ForMember(d => d.Birthday, opt => opt.MapFrom(o => o.Birthday.ToString("dd/MM/yyyy")));


            CreateMap<AddressCreationDTO, Address>().ForMember(d => d.Id, o => o.Ignore())
                                                    .ForMember(d => d.ClientUser, o => o.Ignore());
            CreateMap<Address, AddressDTO>().ForPath(d => d.ClientUserName, opt => opt.MapFrom(o => o.ClientUser.Name));


            CreateMap<UserAccount, UserAccountResponseRegisterDTO>();
            CreateMap<ClientUser, ClientUserDTO>().ForMember(d => d.Addresses, opt => opt.MapFrom(o => o.Addresses))
                                                  .ForMember(d => d.Pets, opt => opt.MapFrom(o => o.Pets));
            CreateMap<ClientUserDataUpdateDTO, ClientUser>().ForMember(d => d.Id, o => o.Ignore());
            CreateMap<UserAccountResponseLoginDTO, UserAccountLoginDTO>();
            CreateMap<UserAccountResponseRegisterDTO, UserAccountRegisterDTO>();

        }
    }
}
